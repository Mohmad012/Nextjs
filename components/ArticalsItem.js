import articalsStyles from '../styles/Articals.module.css'
import Link from 'next/link';
import {useEffect } from 'react';

export default function ArticalsItem({ articale }) {

	useEffect(() => {
			return{
				params: { id: articale.id.toString() },
			}
		},[])

	return (
		<Link href="/articale/[id]" as={`/articale/${articale.id}`}>
	    <div className={articalsStyles.boxArtical}>
	    	<a>
		    	<h3>{articale.title}</h3>
		    	<p>{articale.body}</p>
	    	</a>
	    </div>
		</Link>
	)
}