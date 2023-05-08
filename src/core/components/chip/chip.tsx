import './chip.css';
export function Chip({ name, color }: { name: string; color: string }) {
    return <span className={`chip ${color}`}>{name}</span>;
}
