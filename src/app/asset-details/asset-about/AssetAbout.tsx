import {seedTopBarData, seedAssetAbout, TopBarDataType} from "@/app/utils/seed-data/seed-asset-details";

interface Props{
    topBarData: TopBarDataType;
    assetAbout: string[];
}

const AssetAbout: React.FC<Props> = ({topBarData, assetAbout}) => {

    return (
        <div>
            <h1 className='mb-7 mt-5'><b>What is {topBarData.assetName}?</b></h1>
            <div className='border border-solid border-grey-300 rounded-md px-5 py-7 shadow-x1 bg-blue-500'>
                <p>{assetAbout}</p>
            </div>
        </div>
    );
};

export default AssetAbout;
