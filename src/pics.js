import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import '../src/index.css';



const imageLoader = () => {
    const imageList = [img1, img2, img3, img4];

    return(
        <div>
            {/* {imageList.map((p, i)=>(
                <input>
                <img key={i} src={p} alt="image not Loading..."/>
                </input>
            ))} */}

            Hello World
        </div>
    )


}


// export default imageList;
export default imageLoader;