import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpeg"
import Grid from '../../components/Grid'
import request from '../../api/request'

const footerAboutLinks = [
    {
        display: "Về chúng tôi",
        path: "/ve-chung-toi"
    },
    {
        display: "Hướng dẫn mua hàng",
        path: "/huong-dan-mua-hang"
    },
    {
        display: "Hướng dẫn thanh toán",
        path: "/huong-dan-thanh-toan"
    },
    {
        display: "Hướng dẫn trả góp",
        path: "/huong-dan-tra-gop"
    },
    {
        display: "Chính sách vận chuyển",
        path: "/chinh-sach-van-chuyen"
    },
    {
        display: "Chính sách bảo hành",
        path: "/chinh-sach-bao-hanh"
    },
    {
        display: "Chính sách đổi trả hàng",
        path: "/chinh-sach-doi-tra-hang"
    },
    {
        display: "Cam kết bảo mật thông tin",
        path: "/cam-ket-bao-mat-thong-tin"
    },
    {
        display: "Tuyển cộng tác viên toàn quốc",
        path: "/tuyen-cong-tac-vien-toan-quoc"
    },

]

const footerCustomLink = [
    {
        display: "Tuyển cộng tác viên toàn quốc",
        path: "/tuyen-cong-tac-vien-toan-quoc"
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
                    <div key={cate._id}>
                        {cate.name}
                    </div>
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
                            <div className="footer_title">
                                Danh mục kinh doanh
                            </div>
                            <div>
                                {renderCategory()}
                            </div>
                        </div>
                    </Grid>
                </div>
            </footer>
        </div>
    )
}
