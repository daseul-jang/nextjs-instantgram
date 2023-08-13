import { SimplePost } from '@/model/post';
import useSWR from 'swr';

async function updateLike(id: string, like: boolean) {
  return fetch('/api/likes', {
    method: 'PUT',
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json());
}

<<<<<<< HEAD
=======
async function updateLike(id: string, like: boolean) {
  return fetch('/api/likes', {
    method: 'PUT',
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json());
}

>>>>>>> 0ce64be68d50fbb9de545929c1774542a30a8338
export default function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
  } = useSWR<SimplePost[]>('/api/posts');
  const setLike = (post: SimplePost, username: string, like: boolean) => {
    const newPost = {
      ...post,
      likes: like
        ? [...post.likes, username]
        : post.likes.filter((item) => item !== username),
    };
    const newPosts = posts?.map((p) => (p.id === post.id ? newPost : p));

    return mutate(updateLike(post.id, like), {
      optimisticData: newPosts,
      populateCache: false, // 모든 포스트에 있는 데이터를 사용할게 아니라서 false, 그러므로 모든 포스트 데이터가 바뀌는 건 X
      revalidate: false, // 로컬상으로 새로운 포스트 배열을 만들었으므로 서버에서 또 받아올 필요가 없음
      rollbackOnError: true, // 혹여나 네트워크 문제가 발생할 경우 rollback
    });
  };
  return { posts, isLoading, error, setLike };
}
