import { useEffect, useState } from 'react'
import useTitle from '../../hooks/useTitle'
import { useAppSelector } from '../../redux/hooks'
import './Gifts.css'
import TargetMarket from '../../models/TargetMarket'
import { useDispatch } from 'react-redux'
import GiftsServices from '../../services/GiftsServices'
import { setPresents, setSelectedCategory } from '../../redux/giftsSlice'
import loadingPhoto from '../../assets/images/loading.png'

export default function Gifts(): JSX.Element {
  const [targetMarkets, setTargetMarkets] = useState<TargetMarket[]>([])
  const [loading, setLoading] = useState(false)
  const presents = useAppSelector(state => state.gifts.presents)
  const selectCategoryId = useAppSelector(state => state.gifts.selectedCategoryId)

  const dispatch = useDispatch()
  // const loading = useAppSelector(state => state.gifts.isLoading)

  useTitle('Gift Shop - Presents')

  useEffect(() => {
    async function loadTargetMarkets() {
      try {
        const service = new GiftsServices();
        const markets = await service.getTargetMarket()
        setTargetMarkets(markets)
      } catch (error) {
        console.log('Failed to load target markets:', error)
      }
    }
    loadTargetMarkets()
  }, [])

  useEffect(() => {
    if (!selectCategoryId) return

    async function loadPresents() {



      try {
        setLoading(true)
        const service = new GiftsServices()
        const presents = await service.getPresents(selectCategoryId as string)
        dispatch(setPresents(presents))
      } catch (error) {
        console.log('Failed to load presents:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPresents()
  },[selectCategoryId, dispatch])

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const categoryId = e.target.value
    dispatch(setSelectedCategory(categoryId === "" ? null : categoryId))
  }

  async function handleDelete(presentId: string) {
    try {
      const service = new GiftsServices()
      await service.deletePresent(presentId)

      const updatedPresents = presents.filter(p => p.id !== presentId)
      dispatch(setPresents(updatedPresents))

    } catch (error) {
      console.log('Delete error:', error)
    }
  }

  return (
    <div className='Gifts'>

      <h1> Available Gifts</h1>

      <div className='category-selector'>
        <select value={selectCategoryId || ""} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {targetMarkets.map(market => (
            <option key={market.id} value={market.id}>
              {market.category}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className='loading'><img src={loadingPhoto} alt="Loading..." /></div>}
      {!loading && selectCategoryId && presents.length === 0 && (
        <div className='no-presents'>No presents available for this category</div>
      )}

      <div className='presents-container'>
        {presents.map(present => (
          // {const {name, description, price, discount} = present}
          <div className='present-card' key={present.id}>
            <h3>Name: {present.name}</h3>
            <p> Description: {present.description}</p>
            <p>Price: ${present.price}</p>
            <p>Discount: {present.discount}%</p>
            <button className='delete-button' onClick={() => handleDelete(present.id)}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  )
}