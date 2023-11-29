import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    async function createProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        await axios.post('api/products', data);

    }

    return( <Layout>
        <form onSubmit={createProduct}>
        <h1 className="text-blue-900 mb-2 test-xl"> محصول جدید </h1>
        <label>نام محصول</label>
        <input type="text" placeholder="product name"
        value={title} 
        onChange={ev=> setTitle(ev.target.value)}/>
        <label>توضیحات</label>
        <textarea placeholder="description"
        value={description}
           onChange={ev=> setDescription(ev.target.value)} ></textarea>
        <label>قیمت (IRIB)</label>
        <input type="text" placeholder="price" value={price}
           onChange={ev=> setPrice(ev.target.value)}/>
        <button type="submit"
         className="btn-primary">
             ذخیره </button>
        </form>
        
    </Layout>
);
}