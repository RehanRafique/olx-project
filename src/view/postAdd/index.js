import "../postAdd/index.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostAddToDb } from "../../Config/Firebase";



function CreateAdd() {
    const nevigate = useNavigate();
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const Post = async () => {
        console.log('image', image)
        await PostAddToDb({ title, price, description, image })
        nevigate('/')
    }

    return (
        <div className="mainDiv">
            <div className="adDiv">
                <h2>Enter Ad Details</h2><br />
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br /><br />
                <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br /><br />
                <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} /><br /><br />
                {/* <input type="file" onChange={(e) => setImage([e.target.files])} multiple /><br /><br /> */}

                <div className="form-row">
                    <label htmlFor="password">Image</label>
                    <input type="file" name="password" id="password" className="input-text" placeholder="Image" required onChange={(e) => setImage([e.target.files])} multiple />
                </div>
                <br />
                <button onClick={Post} className="postBtn">Post Ad</button>
                <p>
                </p>
                      </div>

                </div>
    )
}
export default CreateAdd;