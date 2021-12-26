import React from 'react'
import {ProductLayout } from '../../components/Layout'
import ProductCard from '../../components/ProductCard/ProductCard'
import request from '../../api/request'
import Grid from '../../components/Grid'
import Helmet from '../../components/Helmet/Helmet'

const PAGE_SIZE = 10;

export default function ProductList() {
    const [status, setStatus] = React.useState("idle");
    const [product, setProduct] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);

    const fetchProduct = async (page) => {
        const skip = (page - 1) * PAGE_SIZE;
        const limit = PAGE_SIZE;

        try {
            setStatus("loading")
            // console.log("hihi");
            const res = await request({
                method: "GET",
                url: "/product",
                params: {
                    skip,
                    limit,
                  },
            })
            // console.log("jiji",res);
            if(res && res.success){
                const {total, data} = res;
                setStatus("done")
                setTotal(total)
                setProduct(data)
                return;
            } 
            
            setStatus("error")
        } catch (err) {
            setStatus("error")
        }
    }  
    // console.log(currentPage);
    React.useEffect(() => {
        fetchProduct(currentPage);
    }, [currentPage])

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }
    console.log(product);
    const renderProduct = () => {
        if (status === "error") return <div>Error</div>;

        if (status === "idle" || status === "loading") return <div>Loading...</div>;
    
        return(
            <>
                {
                   product.map((product) => (
                       <ProductCard
                        key={product.id}
                        slug={product.slug}
                        imageUrl={product.imgProduct}
                        name={product.name}
                        price={product.price}
                       />
                   )) 
                }
            </>
        )
    }

    return (
        <ProductLayout>
            <Helmet title='Sản phẩm'>
                <div className="product">
                    <div className="product__sidebar"></div>
                    <div className="product__content">
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={24}
                        >
                            {renderProduct()}
                        </Grid>
                    </div>
                </div>
                <div>
                    {/* <Pagination
                        currentPage={currentPage}
                        total={total}
                        handleChangePage={handleChangePage()}
                    /> */}
                </div>
            </Helmet>
        </ProductLayout>
    )
}
