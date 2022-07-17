/*eslint @typescript-eslint/no-explicit-any: 0 */
/*eslint no-irregular-whitespace : 0 */

import { IJitsiMeetingProps } from '@jitsi/react-sdk/lib/types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Div } from '#/components/atoms';
const JitsiMeeting = dynamic(
  () =>
    import('@jitsi/react-sdk').then(({ JitsiMeeting }) => JitsiMeeting) as any,
  {
    ssr: false,
  },
) as React.FC<IJitsiMeetingProps>;

// /room
function Meet() {
  const router = useRouter();

  return (
    <Div height="calc(100vh - 80px)">
      <JitsiMeeting
        domain={'meet.jit.si'}
        // roomName={Math.random().toString()}
        roomName={'test-copotter'}
        configOverwrite={{
          SHOW_CHROME_EXTENSION_BANNER: false,
          startWithAudioMuted: true, // 오디오를 음소거한 상태에서 통화를 시작합니다. 이 옵션은 로컬에만 적용됩니다.
          disableModeratorIndicator: false, // 중재자 표시를 숨깁니다.
          enableWelcomePage: false,
          enableEmailInStats: false, // 참가자의 이메일(사용 가능한 경우)을 통화 통계 및 기타 분석에 보낼 수 있습니다.
          enableLayerSuspension: true,
          // 레이어 정지를 활성화합니다. 활성화된 경우 HD 레이어가 사용되지 않는 엔드포인트는 다시 요청될 때까지 일시 중단(더 이상 전송되지 않음)됩니다. Chrome에서 화면 공유가 예상대로 작동하려면 이 기능을 활성화해야 합니다. 이 기능을 비활성화하면 클라이언트에서 저해상도 화면 공유를 보낼 수 있습니다.
          prejoinPageEnabled: false, // 장치 조정을 허용하기 위해 합류하기 전에 중간 페이지를 표시하십시오
          disableReactions: true, // 반응 조절 기능을 비활성화합니다.
          disableTileView: false,
          disableProfile: false,
          disable1On1Mode: false,
          enableClosePage: false,
          hideLobbyButton: false, // 로비 버튼을 숨깁니다.
          maxFullResolutionParticipants: 2, // 타일 ​​보기 모드에 있는 동안 수신 비디오 품질이 HD에서 SD로 감소하기 전의 참가자 수입니다. -1 : 비활성화하는 데 사용합니다
          disableSelfView: false, // 셀프 뷰 타일을 비활성화합니다. (타일 보기 및 필름 스트립에서 숨김)
          doNotStoreRoom: false,
          enableInsecureRoomNameWarning: false, // 방 이름이 안전하지 않은 것으로 간주되면 경고 레이블을 표시합니다.
          localSubject: 'Conference Local Subject',
          readOnlyName: true,
          resolution: 720, // 로컬 비디오의 기본 해상도(높이)를 설정합니다.
          remoteVideoMenu: {
            disableKick: true,
          },
          startAudioMuted: 0, // N 번째 이후의 모든 참가자는 오디오 음소거를 시작합니다.
          constraints: {
            video: {
              aspectRatio: 16 / 9,
              height: {
                ideal: 720,
                max: 480,
                min: 180,
              },
              width: {
                ideal: 640,
                max: 640,
                min: 320,
              },
            },
          },
          // 비디오 캡처에 사용할 W3C 사양 준수 비디오 제약 조건입니다. 현재 lib-jitsi-meet에서 true를 반환하는 브라우저에서 사용됩니다 util#browser#usesNewGumFlow. 제약 조건은 이 구성의 해상도 값과 무관합니다. 기본값은 720p의 이상적인 해상도를 요청하는 것입니다.
          conferenceInfo: {
            alwaysVisible: [
              'subject',
              'participants-count',
              'conference-timer',
            ],
            alwaysInVisible: ['insecure-room'],
            autoHide: [
              'transcribing',
              'video-quality',
              'insecure-room',
              'highlight-moment',
            ],
          },
          participantsPane: {
            hideModeratorSettingsTab: false, // 중재자 설정 탭을 여는 버튼을 숨깁니다.
            hideMoreActionsButton: true, // 추가 작업 버튼을 숨깁니다.
            hideMuteAllButton: false, // 모두 음소거 버튼을 숨깁니다.
          },
          tileView: {
            numberOfVisibleTiles: 25,
          },
        }}
        interfaceConfigOverwrite={{
          // 선택 사항입니다. interface_config.js 파일 에 정의된 옵션에 대한 재정의가 있는 JS 개체입니다
          /**
           * Specify which sharing features should be displayed. If the value is not set
           * all sharing features will be shown. You can set [] to disable all.
           */
          // SHARING_FEATURES: ['email', 'url', 'dial-in', 'embed'],

          SHOW_BRAND_WATERMARK: false,

          /**
           * Decides whether the chrome extension banner should be rendered on the landing page and during the meeting.
           * If this is set to false, the banner will not be rendered at all. If set to true, the check for extension(s)
           * being already installed is done before rendering.
           */
          SHOW_CHROME_EXTENSION_BANNER: false,

          SHOW_DEEP_LINKING_IMAGE: false,
          SHOW_JITSI_WATERMARK: true,
          SHOW_POWERED_BY: false,
          SHOW_PROMOTIONAL_CLOSE_PAGE: false,
        }}
        userInfo={{
          displayName: Math.random().toString(),
          email: '',
        }}
        onApiReady={(e) => {
          console.log('lhh onApiReady', e);
        }}
        onReadyToClose={() => {
          console.log('lhh onReadyToClose');
          router.push('/');
        }}
        getIFrameRef={(iframe) => {
          iframe.style.height = '100%';
        }}
      />
    </Div>
  );
}

export default Meet;
