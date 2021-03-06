import Head from "next/head";
import Hero from "../components/layout/landing/Hero";
import Navbar from "../components/layout/common/Navbar";

export default function Home({ featuredProduct, products }) {
  return (
    <div>
      <Head>
        <title>Animated Ecommerce Store</title>
        <meta name="description" content="Animated Ecommerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen max-w-screen-2xl w-11/12 mx-auto px-2 flex flex-col">
        <Navbar />
        <Hero featuredProduct={featuredProduct} products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const productRes = await fetch(
    "https://zzsrwmhjtgrfa1m1xngldomvndz2.requestly.me/products"
  );

  const products = await productRes.json();

  const featuredProductIdx = products.findIndex(
    (product) => product.isFeatured
  );

  const featuredProduct = products[featuredProductIdx];
  products.splice(featuredProductIdx, 1);

  return {
    props: { featuredProduct, products },
  };
}
