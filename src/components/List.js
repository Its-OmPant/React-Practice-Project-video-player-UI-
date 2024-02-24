function List({ layout, items }) {
	return (
        <>
        {layout === 'numbered' || layout === 'alpha'
        ? <ol type={layout==='numbered'?'1':'A'}>
            {items.map(i=> <li>{i}</li> )}
        </ol> 
        : <ul>
            {items.map(i=> <li>{i}</li> )}
        </ul> }
        </>
    );
}

export default List;
