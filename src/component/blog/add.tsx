import { useMutation } from '@tanstack/react-query';
import { baseUrl } from './blog';
import { ProductsResponse } from './prodData';
import axios from 'axios';



const AddProduct = () => {
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (title: string) => {
      const response = await axios.post<ProductsResponse>(`${baseUrl}/products/add`, { title });
      return response.data ;
    },
  });

    return (
    <div>
      <button onClick={() => mutate('My New Product')} disabled={isPending}>
        {isPending ? 'Adding...' : 'Add product'}
      </button>
      {isSuccess && <p>Product added.</p>}
      {isError && <p>Something went wrong.</p>}
    </div>
  );
};
    // const Profile = ({ userId }: { userId: number }) => {
    // const { data: user } = useQuery({
    //     queryKey: ['user', userId],
    //     queryFn: async () => {
    //     const response = await axios.get(`${baseUrl}/users/${userId}`);
    //     return response.data;
    //     },
    // });
    
    // const { data: posts } = useQuery({
    //     queryKey: ['posts', 'user', userId],
    //     queryFn: async () => {
    //     const response = await axios.get(`${baseUrl}/posts/user/${userId}`);
    //     return response.data.posts;
    //     },
    //     enabled: !!user,   // wait until the user has arrived
    // });
    
    // return <div>{user?.firstName} has {posts?.length ?? 0} posts</div>;
    // };

export default AddProduct;

