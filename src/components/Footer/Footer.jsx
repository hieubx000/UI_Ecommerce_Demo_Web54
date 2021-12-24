import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../../assets/images/logo.jpeg"
import Grid from '../../components/Grid'
import request from '../../api/request'

const footerIntroduce = [
    {
        display: "Giới thiệu",
        path: "/"
    },
    {
        display: "Tuyển dụng",
        path: "/"
    },
    {
        display: "Liên hệ hợp tác",
        path: "/"
    },
    {
        display: "Góp ý",
        path: "/"
    },
    {
        display: "Blogs công nghệ",
        path: "/"
    },

]

const footerCustomerSupport = [
    {
        display: "Hướng dẫn mua trả góp",
        path: "/"
    },
    {
        display: "Trung tâm bảo hành",
        path: "/"
    },
    {
        display: "Chính sách bảo hành",
        path: "/"
    },
    {
        display: "Thứ 2 - thứ 7: 8h - 22h",
        path: "/"
    },
    {
        display: "CN & ngày lễ: 9h - 18h",
        path: "/"
    },
]



export default function Footer() {
    
  const [status, setStatus] = React.useState("idle");
    const [category, setCategory] = React.useState([]);

    const fetchCategory = async () => {
        try{
            setStatus("loading");
            const res = await request({
                method: "GET",
                url: "/category",
            })
            // console.log(res.data);
            if (res && res.success) {
                setCategory(res.data);
                setStatus("done");
                return;
            }
            
            setStatus("error");
            
        } catch(err){
            setStatus("error");
        }
        
    }
    React.useEffect(() => {
        fetchCategory();
    },[])
    // console.log(category);
    const renderCategory = () => {
        if (status === "error") return <div>Error</div>;

        if (status === "idle" || status === "loading") return <div>Loading...</div>;

        return(
            <div className="footer__content">
                {category.map((cate) => (
                    <p key={cate._id}>
                        {cate.name}
                    </p>
                ))
                }
            </div>
        )
    }
    // console.log(renderCategory);
    return (
        <div>
            <footer className='footer'>
                <div className="container">
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={10}
                    >
                        <div>
                            <div className="footer__title">
                                Danh mục kinh doanh
                            </div>
                            <>
                                {renderCategory()}
                            </>
                        </div>
                        <div>
                            <div className="footer__title">
                                GIỚI THIỆU VỀ SETUP STORE
                            </div>
                            <div className='footer__content'>
                                {
                                    footerIntroduce.map((item,idx) => (
                                        <p key={idx}>
                                            <Link to={item.path}>
                                               {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className="footer__title">
                                HỖ TRỢ KHÁCH HÀNG
                            </div>
                            <div className='footer__content'>
                                {
                                    footerCustomerSupport.map((item,idx) => (
                                        <p key={idx}>
                                            <Link to={item.path}>
                                               {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                        <div className="footer__title">
                            LIÊN HỆ TRỰC TIẾP
                        </div>
                        <div className="footer__content">
                            <p>
                                Tổng đài CSKH <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>setupstore@gmail.com</strong>
                            </p>
                        </div>
                    </div>
                    </Grid>
                </div>
            </footer>
        </div>
    )
}
