import { VIDEO_CONFIG } from '../../../config/landing';
import VideoSectionBase from './VideoSectionBase';

export default function VideoSection() {
  return <VideoSectionBase defaultSource={VIDEO_CONFIG.SOURCE} queryParamKey="video" />;
}
