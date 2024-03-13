import { API } from "@/helpers/const"
import axios from "axios"
import { onMounted, ref } from "vue"

export const useFetching = () => {
  
    const posts = ref([])
  
    const fetchPost = async () => {
      const responsePosts = await axios.get(API + 'posts')
      const responseUsers = await axios.get(API + 'users')
      const users = responseUsers.data.map(user => ({name: user.name, id: user.id}))  
      posts.value = responsePosts.data.map(post => {
        const user = users.find(user => user.id === post.userId)
        return {...post, author: user.name}
      })
    }
    
    onMounted(() => {
      fetchPost()
    })

    return [
        posts,
        fetchPost
    ]
}