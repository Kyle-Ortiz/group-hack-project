import styles from '../../../styles/admin/controllers.module.css'

export default function Controllers() {
    const buttons = [
        <button onClick={{}}>Items</button>,
        <button onClick={{}}>Categories</button>,
        <button onClick={{}}>Employees</button>,
        <button onClick={{}}>Analytics</button>,
        // <button onClick={{}}>Items</button>,
        // <button onClick={{}}>Employees</button>,
        // <button onClick={{}}>Analytics</button>,
        // <button onClick={{}}>Items</button>,
        // <button onClick={{}}>Employees</button>,
        // <button onClick={{}}>Analytics</button>,
    //     <button onClick={{}}>Items</button>,
    //     <button onClick={{}}>Employees</button>,
    //     <button onClick={{}}>Employees</button>,
    //     <button onClick={{}}>Analytics</button>,
    //     <button onClick={{}}>Analytics</button>,
    //     <button onClick={{}}>Analytics</button>,
    ]
    return (
        <div className={styles.controllersContainer}>
            {buttons.map(button => button)}
        </div>
    )
}