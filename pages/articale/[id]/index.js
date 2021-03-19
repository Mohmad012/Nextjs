import Link from 'next/link';
import Meta from '../../../components/Meta';
import {server} from '../../../config';
// import axios from 'axios';
// import {useEffect , useState} from 'react';
// import {useRouter} from 'next/router';
//  setArtical(artical)
const artical = ({artical}) => {

	// const [ artical , setArtical ] = useState([]);

	// const router = useRouter();
	// const {id} = router.query

	// useEffect(()=>{

	//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	//       .then(res => res.json())
	//       .then(artical => setArtical(artical))

	//     // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
	//     //   // const articals = res.data.json()
	//     //   console.log(res)
	//     //   setArtical(res.data)
	//     // }).catch(error => {
	//     //         console.log(error);
	//     //     })

	// },[id])
	
	// console.log(artical)

	return(
		<>	
			<Meta title={artical.title} />
			<h1>{artical.title} </h1>
			<p>{artical.body}</p>
			<Link href="/post/[id]" as={`/post/${artical.id}`}>Go Body </Link>
			<br />
			<Link href="/">Go Back </Link>
		</>
	)
}


export const getStaticProps = async (context) => {


	const res = await fetch(`${server}/api/articals/${context.params.id}`)
	const artical = await res.json();

	return{
		props: {
			artical
		}
	}
}

// If Put id static in hash
export const getStaticPaths = async () => {


	const res = await fetch(`${server}/api/articals`)
	const articals = await res.json();

	const ids = articals.map(post => post.id)

	const paths = ids.map(id => ({params: {id: id.toString()} }))

	return{
		paths,
		fallback:false,
	}
}


// export const getStaticProps = async (context) => {


// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
// 	const artical = await res.json();

// 	return{
// 		props: {
// 			artical
// 		}
// 	}
// }

// // If Put id static in hash
// export const getStaticPaths = async () => {


// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// 	const articals = await res.json();

// 	const ids = articals.map(post => post.id)

// 	const paths = ids.map(id => ({params: {id: id.toString()} }))

// 	return{
// 		paths,
// 		fallback:false,
// 	}
// }

export default artical;