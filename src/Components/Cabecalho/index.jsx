export const Cabecalho = ({logobocaweb}) => {
    return(
        <section className="cabecalho">
            <div className="cabecalhoum">
                <div className="titulozin">
                    <h1 className="front">
                        BOCAWEB FRONT
                    </h1>
                </div>
                <div className="logo">
                    <img src={logobocaweb} alt='Logo do site Boca Web' />
            </div>
            </div>
        </section>
    )
}

export default Cabecalho