import './styles/CardInfo.css'

const CardInfo = ({pokemon,  id }) => {
  
  const firsType = pokemon?.types[0].type.name

  return (
    <section className="pokeidpage_section">
        <div className={`pokeidpage_img_container ${firsType}-gradient`}>
        <img className="pokeidpage_img_pokemon"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
        </div>

      <h2 className={`pokeidpage_id ${firsType}-gradient`}>#{pokemon?.id}</h2>
      <h2 className='pokeidpage_name'>{pokemon?.name}</h2>
      <ul className='pokeidpage_ul_size'>
        <li className='pokeidpage_li'>
          <h3 className='pokeidpage_h3'>weight</h3>
          <span className='pokeidpage_span_value'>{pokemon?.weight}</span>
        </li>
        <li className='pokeidpage_li'>
          <h3 className='pokeidpage_h3' >height</h3>
          <span className='pokeidpage_span_value'>{pokemon?.height}</span>
        </li>
      </ul>
      <div className='pokeidpage_ul_container'>
      <div>
      <h2 className='pokeidpage_info'>Tipe</h2>
      <ul className='pokeidpage_ul_info'>
        {pokemon?.types.map((tipe) => (
          <li className='pokeidpage_li_info' key={tipe.type.url}> {tipe.type.name} </li>
        ))}
      </ul>
      </div>
     <div>
     <h2 className='pokeidpage_info'>Skills</h2>
      <ul className='pokeidpage_ul_info'>
        {pokemon?.abilities.map((abili) => (
          <li className='pokeidpage_li_info' key={abili.ability.name}> {abili.ability.name} </li>
        ))}
      </ul >
     </div>
        </div>
      <div className='pokeidpage_container_state'>
      <label className='pokeidpage_state'>Stats</label>
      <hr className='hr'/>
      </div>
     
      <ul className='pokeidpage_ul_state'>
        {pokemon?.stats.map(sta => (
      <>
          <li className='pokeidpage_stat_info'  key={sta.stat.url}>
           <h3 className='pokeidpage_stat_infoname'> {sta.stat.name} </h3> 
          <span className='pokeidpage_stat_infovalue'>
            {sta.base_stat} / 150
          </span>
          </li>
          <div className='progress_bar'>
            <div className='progre' style={{width: `${100/(150/sta.base_stat)}%`}} ></div>
          </div>
      </>
        )) }
      </ul>
      </section>
  )
}

export default CardInfo