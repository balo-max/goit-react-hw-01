import css from "./TransactionItem.module.css";

export default function TransactionItem({ item: { type, amount, currency } }) {
    return (
        <>
            <td className={css.text}>{type}</td>
            <td className={css.text}>{amount}</td>
            <td className={css.text}>{currency}</td>
        </>            
    );
}