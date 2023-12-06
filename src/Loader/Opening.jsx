
const Opening = () => {
    const loading = true;
    return (
        <div className={`flex items-center justify-center h-screen ${loading ? '' : 'hidden'}`}>
            <div className="animate-bounce text-5xl">
                elArise
            </div>
        </div>
    );
};

export default Opening;
