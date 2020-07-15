import Head from 'next/head';
import {useRouter} from 'next/router';

const withHead = (Component, title, description, keyword, canonical, image, width, height) => {
	const C = props => {
		const {router: {query: {id}, pathname}} = props;
		const pathCheck = pathname.includes('/vn')

		const idDescription = `${id}, ${description}`;
		const idCanonical = `https://ulmaya.zikto.com/itemTrendDetail/${id}`
		const idTitle = pathCheck ? `Ulmaya-${id}` : `얼마야-${id}`;
		const idImage = props.pageProps && props.pageProps.itemDetail && props.pageProps.itemDetail.itemDetail && props.pageProps.itemDetail.itemDetail.image;
		const keywords = pathCheck ? keyword ? `Giao dịch đã qua sử dụng, mua lại, cho vay thế chấp, cho vay nhỏ, bán điện thoại di động, bán máy tính xách tay, mua máy ảnh, ${keyword}` : `Giao dịch đã qua sử dụng, mua lại, cho vay thế chấp, cho vay nhỏ, bán điện thoại di động, bán máy tính xách tay, mua máy ảnh` : keyword ? `중고거래, 중고매입, 담보대출, 소액대출, 휴대폰 판매, 노트북 판매, 카메라 매입, ${keyword}` : `중고거래, 중고매입, 담보대출, 소액대출, 휴대폰 판매, 노트북 판매, 카메라 매입`;
		const canonicals = `https://ulmaya.zikto.com/${canonical}`;
		const images = image !== undefined && image;
		
		return (
			<>
				<Head>
					{pathCheck ? <meta name="author" content="ulmaya" /> : <meta name="author" content="얼마야" />}
					{id ? <title>{idTitle}</title> : title ? <title>{title}</title> : null}
					{id ? <meta name="description" content={idDescription} /> : description ? <meta name="description" content={description} /> : null}
					<meta name="keywords" content={keywords} />

					{id ? <link rel="image_src" href={idImage} /> : image ? <link rel="image_src" href={images} /> : null}
            		{id ? <link rel="image_src" href={idImage} /> : image ? <meta itemprop="image" content={images} /> : null}

					{id ? <link rel="canonical" href={idCanonical} /> : canonical ? <link rel="canonical" href={canonicals} /> : null}
					{id ? <meta property="og:site_name" content={idCanonical} /> : canonical ? <meta property="og:site_name" content={canonicals} /> : <meta property="og:site_name" content='https://ulmaya.zikto.com' />}
					{id ? <meta property="og:title" content={idTitle} />: title ? <meta property="og:title" content={title} /> : null}
					{id ? <meta property="og:description" content={idDescription} /> : description ? <meta property="og:description" content={description} /> : null}
					{id ? <meta property="og:url" content={idCanonical} /> : canonical ? <meta property="og:url" content={canonicals} /> : <meta property="og:url" content='https://ulmaya.zikto.com' />}
				</Head>

				<Component {...props}/>
			</>

		);
	};
	return C;
};

export default withHead;