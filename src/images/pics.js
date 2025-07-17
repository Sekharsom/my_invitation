import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';



const imageLoader = () => {
    const imageList = [img1, img2, img3, img4];

    return(
        <div>
            {imageList.map((p, i)=>(
                <img key={i} src={p} alt="image not Loading..."/>
            ))}
        </div>
    )


}


// export default imageList;
export default imageLoader;