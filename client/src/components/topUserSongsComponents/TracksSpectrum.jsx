import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import MusicItem from "../ItemComponents/MusicItem"

const TRACKS_SPECTRUM_HEADER_ONE = "Happy Songs 😃"
const TRACKS_SPECTRUM_HEADER_TWO = "Your Top Songs Spectrum"
const TRACKS_SPECTRUM_HEADER_THREE = "Sad Songs 😔"
const TRACKS_SPECTRUM_DESC = `Your Top Songs Spectrum is your top 5 happiest and top 5 saddest songs according to Spotify's valence metric for 
whatever time period you chose. You might disagree with some songs being labeled happy or sad I found.`

const TracksSpectrum = ({ spectrumData }) => {

    return (
        <Stack className="padding-1-rem">

            {/* TRACKS SPECTRUM TITLE */}
            <Stack className="padding-1-rem" direction="row" justifyContent="space-between" style={{ paddingBottom: "0rem" }}>

                {/* LEFT TITLE */}
                <h1 className="title-padding">
                    {TRACKS_SPECTRUM_HEADER_ONE}
                </h1>

                {/* MIDDLE TITLE */}
                <h1 className="title-padding" >
                    {TRACKS_SPECTRUM_HEADER_TWO}
                </h1>

                {/* RIGHT TITLE */}
                <h1 className="title-padding">
                    {TRACKS_SPECTRUM_HEADER_THREE}
                </h1>

            </Stack>

            <Divider className="gradient-divider" />

            {/* TRACKS SPECTRUM SONG ITEMS */}
            <Stack direction="row">
                {
                    spectrumData.slice(0,10).map((item, index) => <MusicItem item={item} index={index} />)
                }
            </Stack>  

            {/* TRACKS SPECTRUM DESCRIPTION */}
            <small className="small-desc-white text-align-center">
                {TRACKS_SPECTRUM_DESC}
            </small>

        </Stack>
    )
}

export default TracksSpectrum;