import Button from "./Button";

export default function Toolbar({ onPlayMovie, onUploadImage }: any) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}
