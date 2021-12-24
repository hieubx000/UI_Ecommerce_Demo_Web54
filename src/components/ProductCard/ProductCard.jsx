import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function ProductCard({slug,imageUrl, name, price}) {
    return (
        <div className="productCard">
            <Link to={`/product/${slug}`}>
                <div className="productCard__image">
                    <img src={imageUrl} alt="" />
                </div>
                <h3 className="productCard__name">{name}</h3>
                <div className="productCard__price">{price+" đ"}</div>
            </Link>
            <div className="productCard__button">
                <Button
                    size='sm'
                    icon="bx bx-cart"
                    animate={true}
                    
                >
                    Thêm vào giỏ
                </Button>
            </div>
        </div>
    )
}
