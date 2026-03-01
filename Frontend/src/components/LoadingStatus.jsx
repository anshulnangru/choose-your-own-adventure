function LoadingStatus({theme})
{
    return <div className="Loading-Container">
        <h2>Generating your {theme} Story</h2>

        <div className="Loading-animation">

            <div className="Spinner"></div>

        </div>
        <p className="Loading-Info">
            Please wait while the story is being generated....
        </p>
    </div>
}

export default LoadingStatus;