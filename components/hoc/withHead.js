import Head from 'next/head';
import {useRouter} from 'next/router';

const withHead = (Component, title, description, keyword, canonical, image, width, height) => {
	
	const keywords = keyword ? `중고거래, 중고매입, 담보대출, 소액대출, 휴대폰 판매, 노트북 판매, 카메라 매입, ${keyword}` : `중고거래, 중고매입, 담보대출, 소액대출, 휴대폰 판매, 노트북 판매, 카메라 매입`;
	const canonicals = `https://ulmaya.zikto.com/${canonical}`;
	const images = image !== undefined && images;
	

	// const width = image && (width || 1200);
    // const height = image && (height || 630);
	const C = props => {
		const {router: {query: {id}}} = props;
		const idDescription = `${id}, ${description}`;
		const idCanonical = `https://ulmaya.zikto.com/itemTrendDetail/${id}`
		const idTitle = `얼마야-${id}`;
		return (
			<>
				<Head>
					<meta name="author" content="얼마야" />
					{id ? <title>{idTitle}</title> : title ? <title>{title}</title> : null}
					{id ? <meta name="description" content={idDescription} /> : description ? <meta name="description" content={description} /> : null}
					<meta name="keywords" content={keywords} />

					{image ? <link rel="image_src" href={images} /> : null}
            		{image ? <meta itemprop="image" content={images} /> : null}

					{id ? <link rel="canonical" href={idCanonical} /> : canonical ? <link rel="canonical" href={canonicals} /> : null}

					<meta property="og:site_name" content="https://ulmaya.zikto.com" />
            		<meta property="og:title" content={title} />
					{id ? <meta property="og:description" content={idDescription} /> : description ? <meta property="og:description" content={description} /> : null}
					{id ? <meta property="og:url" content={idCanonical} /> : canonical ? <meta property="og:url" content={canonicals} /> : null}
				</Head>

				<Component {...props}/>
			</>

		);
	};
	return C;
};

export default withHead;