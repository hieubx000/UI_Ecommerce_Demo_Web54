import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpeg"

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

export default function Footer() {
    return (
        <div className='container'>
            Footer
        </div>
    )
}
