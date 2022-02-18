import styles from '../../styles/Selection.module.css'

export default function Company ({company}) {
    console.log("Company rendered")
    return (
        <div className={styles.company}>
            <h2>{company.name}</h2>
        </div>
    )
}