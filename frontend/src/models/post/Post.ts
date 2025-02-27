import Comment from "../comment/Comment";
import User from "../user/User";
import PostDraft from "./PostDrafts";

export default interface Post extends PostDraft {
    id: string,
    userId: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    comments: Comment[],
    user: User
}