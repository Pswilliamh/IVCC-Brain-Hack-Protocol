import { VIDEO_CONFIG } from '../../../config/landing';
import VideoSectionBase from './VideoSectionBase';

export default function SecondVideoSection() {
  return <VideoSectionBase defaultSource={VIDEO_CONFIG.SECOND_SOURCE} queryParamKey="video2" />;
}
