import Link from 'next/link';
import Meta from '../../../components/Meta';
import {server} from '../../../config';
// import axios from 'axios';
// import {useEffect , useState} from 'react';
// import {useRouter} from 'next/router';
//  setArtical(artical)
const post = ({post}) => {

	// const [ post , setPost ] = useState([]);

	// const router = useRouter();
	// const {id} = router.query

	// useEffect(()=>{

	//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	//       .then(res => res.json())
	//       .then(post => setPost(post))

	//     // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
	//     //   // const articals = res.data.json()
	//     //   console.log(res)
	//     //   setArtical(res.data)
	//     // }).catch(error => {
	//     //         console.log(error);
	//     //     })

	// },[id])
	
	console.log(post)

	return(
		<>	
			<Meta title={post.title} />
			<p>{post.body}</p>
			<p>{post.title}</p>
			<br />
			<Link href="/">Go Back </Link>
		</>
	)
}


export const getStaticProps = async (context) => {

	const res = await fetch(`${server}/api/articals/${context.params.id}`)
	const post = await res.json();

	return{
		props: {
			post
		}
	}
}

// If Put id static in hash
export const getStaticPaths = async () => {


	const res = await fetch(`${server}/api/articals`)
	const posts = await res.json();

	const ids = posts.map(post => post.id)

	const paths = ids.map(id => ({params: {id: id.toString()} }))

	return{
		paths,
		fallback:false,
	}
}


// export const getStaticProps = async (context) => {


// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
// 	const post = await res.json();

// 	return{
// 		props: {
// 			post
// 		}
// 	}
// }

// // If Put id static in hash
// export const getStaticPaths = async () => {


// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// 	const posts = await res.json();

// 	const ids = posts.map(post => post.id)

// 	const paths = ids.map(id => ({params: {id: id.toString()} }))

// 	return{
// 		paths,
// 		fallback:false,
// 	}
// }

export default post;