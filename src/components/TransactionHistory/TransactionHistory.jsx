import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionItem/TransactionItem"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item =>
                    <tr key={item.id}>
                        <TransactionItem item={item} />
                    </tr>
                )}
            </tbody>
        </table>
    );
}