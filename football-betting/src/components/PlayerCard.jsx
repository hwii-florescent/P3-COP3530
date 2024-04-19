export default function PlayerCard({name, filename,onClick}) {
    return (
        <div className='player-card'
        onClick={()=> onClick(name,filename)}>
            <h1>{name}</h1>
        </div>
    )
}