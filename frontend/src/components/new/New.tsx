import { useForm } from 'react-hook-form'
import './New.css'
import Present from '../../models/Present'
import { addPresent } from '../../redux/giftsSlice'
import { useAppDispatch, } from '../../redux/hooks'
import useTitle from '../../hooks/useTitle'
import NewServices from '../../services/NewServies'
import { useEffect, useState } from 'react'
import TargetMarket from '../../models/TargetMarket'
import GiftsServices from '../../services/GiftsServices'
import loadingPhoto from '../../assets/images/loading.png'

export default function New(): JSX.Element {


  const [successMessage, setSuccessMessage] = useState<string>("");
  const [targetMarkets, setTargetMarkets] = useState<TargetMarket[]>([])

  const { register, handleSubmit, reset, formState } = useForm<Present>()
  const dispatch = useAppDispatch()

  useTitle('Gift Shop - Add Present')

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

  async function submit(gift: Present) {
    try {
      const service = new NewServices()
      const newGift = await service.addPresent(gift)

      const categoryName = targetMarkets.find(market => market.id === gift.categoryId)?.category || 'unknown'
      const { name, description, price, discount } = gift
      setSuccessMessage(`Gift "${name}" with description: "${description}", price: $${price} 
        and discount ${discount}% has been added to category "${categoryName} successfully`)

      reset()
      dispatch(addPresent(newGift))

      setTimeout(() => setSuccessMessage(''), 5000);

    } catch (error) {
      console.log('submit error:', error)
      setSuccessMessage('')
    }
  }

  return (
    <div className='New'>
      <h1> Welcome New Page</h1>
      <form onSubmit={handleSubmit(submit)}>
        <fieldset>
          <legend> Add new gift:</legend>

          <select {...register('categoryId', {
            required: {
              value: true,
              message: `You must select a category`
            }
          })}>

            <option value=""> Select Category </option>
            {targetMarkets.map(market => (
              <option key={market.id} value={market.id}>
                {market.category}
              </option>
            ))}

          </select>
          <span className='error'>{formState.errors.categoryId?.message}</span>

          <input placeholder='gift name' {...register('name', {
            required: {
              value: true,
              message: `You must provide name for your gift`
            },
            minLength: {
              value: 2,
              message: `Name must be at least 2 letters`
            }
          })} />
          <span className='error'>{formState.errors.name?.message}</span>

          <textarea placeholder='description' {...register('description', {
            required: {
              value: true,
              message: `You must provide description for the gift`
            },
            minLength: {
              value: 10,
              message: `Description must be at least 10 letters`
            }
          })} />
          <span className='error'>{formState.errors.description?.message}</span>


          <input placeholder='price' {...register('price', {
            required: {
              value: true,
              message: `You must enter price`
            },
            min: {
              value: 1,
              message: `Number must be positive`
            }
          })} />
          <span className='error'>{formState.errors.price?.message}</span>

          <input placeholder='discount' {...register('discount', {
            required: {
              value: true,
              message: `You must provide a discount number in %`
            },
            min: {
              value: 0,
              message: `Number must be positive or 0`
            },
            max: {
              value: 95,
              message: `Discount can not exceed 95%`
            }
          })} />
          <span className='error'>{formState.errors.discount?.message}</span>

          {!formState.isSubmitting && <button>Add Gift</button>}
          {formState.isSubmitting && <p>Adding new gift... <i><img src={loadingPhoto} /></i></p>}
        </fieldset>
      </form>
      {successMessage && (
        <div className='success-message'>
          {successMessage}
        </div>
      )}
    </div>
  )
}