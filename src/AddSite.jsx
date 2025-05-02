import './AddSite.css'

function AddSite(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = event.target.url.value;
        const name = event.target.name.value;
        var logo = event.target.logo.value;

        if (logo == "")
            logo = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + url + "&size=256";

        console.log(logo);
        console.log("n: " + name + " u: " + url + " l: " + logo);
        props.addSiteFunc([
            name, url, logo
        ]);
    };


    return (
        <>
            <div className='big-div'>
                <div className='small-div'>
                    <h3>Add New Site</h3>
                    <form className='add-site-form' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <div className='element-div-l'>
                                <label className='pad-1-rem' htmlFor="url">
                                    Site URL:
                                </label>
                            </div>
                            <div className='element-div-r'>
                                {/* Example: https://react.dev/ */}
                                <input className='pad-1-rem' type="text" id="url"></input>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='element-div-l'>
                                <label className='pad-1-rem' htmlFor="name">
                                    Site Name:
                                </label>
                            </div>
                            <div className='element-div-r'>
                                {/* Example: react.dev */}
                                <input className='pad-1-rem' type="text" id="name"></input>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='element-div-l'>
                                <label className='pad-1-rem' htmlFor="logo">
                                    Site Logo Url/Path:
                                </label>
                            </div>
                            <div className='element-div-r'>
                                {/* Example: https://react.dev/images/brand/logo_dark.svg */}
                                <input className='pad-1-rem' type="text" id="logo" placeholder="Optional"></input>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='element-div-l'>
                                <button className='pad-1-rem' type='submit'>Add</button>
                            </div>
                            <div className='element-div-r'>
                                <button className='pad-1-rem' type='reset' >Reset</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default AddSite;