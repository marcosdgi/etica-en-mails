export const Home = () =>{
    return (
        <div className="container gap-2 "
        style={{
            marginTop:'15px'
        }}
        >
            <div
            style={{
                backgroundImage:`url("header.jpeg")`,
                height: '30rem',
                backgroundRepeat:'none',
                backgroundSize:'cover',
                backgroundPosition: 'center center',
            }}
            ></div>
            <div className="d-flex justify-content-center">
            <h1 className="display-1 align-center">
            <strong> Tema:</strong> {'"Ética y moral en el uso de las TIC"'}
            </h1>
            </div>
            <h3 className="display-4"><strong>Grupo:</strong> 402</h3>
        </div>
    )
}