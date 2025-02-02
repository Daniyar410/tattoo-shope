import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AdminPanel.scss";

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const addProduct = () => {
        if (!image || !description || !price) return;
        const newProduct = { image, description, price };
        setProducts([...products, newProduct]);
        setImage("");
        setDescription("");
        setPrice("");
    };

    const deleteProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    return (
        <section className="admin">
            <div className="admin-panel" data-aos="fade-up">
                <h2>Создание карточки товара</h2>
                <div className="admin-panel__form">
                    <input
                        type="text"
                        placeholder="Ссылка на изображение"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        data-aos="fade-right"
                    />
                    <input
                        type="text"
                        placeholder="Описание товара"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        data-aos="fade-right"
                        data-aos-delay="200"
                    />
                    <input
                        type="number"
                        placeholder="Цена в $"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    />
                    <button onClick={addProduct} data-aos="zoom-in">Добавить товар</button>
                </div>

                <div className="admin-panel__products">
                    {products.map((product, index) => (
                        <div key={index} className="product-card" data-aos="fade-up">
                            <img src={product.image} alt="Product" />
                            <p>{product.description}</p>
                            <b>${product.price}</b>
                            <button className="delete-btn" onClick={() => deleteProduct(index)}>Удалить</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;
