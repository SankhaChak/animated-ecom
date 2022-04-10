import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/layout/common/Navbar";
import ProductView from "../../components/layout/ProductView";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name } = product;

  return (
    <div>
      <Head>
        <title>{name} | Animated Ecommerce Store</title>
        <meta name="description" content="Animated Ecommerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen max-w-screen-2xl w-11/12 mx-auto px-2 flex flex-col">
        <Navbar />
        <ProductView product={product} />
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://zzsrwmhjtgrfa1m1xngldomvndz2.requestly.me/products"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: `${product.id}` },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://zzsrwmhjtgrfa1m1xngldomvndz2.requestly.me/product${params.id}`
  );

  let product = {};

  try {
    product = await res.json();
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return { props: { product }, revalidate: 1 };
};

export default Product;
