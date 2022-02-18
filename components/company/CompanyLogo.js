import styles from "../../styles/navbar.module.css"

function CompanyLogo({imageUrl}) {
    return (
        // <img src="https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667" alt="company-logo" />

    // Comments: Options for 'object-fit' property for an image tag:
        // fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
        // contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
        // cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
        // none - The image is not resized
        // scale-down - the image is scaled down to the smallest version of none or contain
        <div className={styles.logo}>
            <img 
                src={imageUrl} 
                alt="company-logo" 
                width="60px"
                height="60px"
                style = {{
                    objectFit: 'contain'
                }}
            />
        </div>
    )
}

export default CompanyLogo;