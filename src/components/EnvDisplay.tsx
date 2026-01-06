'use client';

export default function EnvDisplay() {

  // NEXT_PUBLIC_ 접두사가 있는 환경변수는 클라이언트에서 접근 가능
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '설정되지 않음';
  const appName = process.env.NEXT_PUBLIC_APP_NAME || '앱 이름';
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || '버전 정보 없음';
  const apiSecretKey = process.env.API_SECRET_KEY || '비밀키 없음';


  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        🔧 환경변수 확인
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            API URL (NEXT_PUBLIC_API_URL)
          </div>
          <div className="text-lg font-mono text-gray-800 dark:text-white break-all">
            {apiUrl}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              앱 이름 (NEXT_PUBLIC_APP_NAME)
            </div>
            <div className="text-lg text-gray-800 dark:text-white">
              {appName}
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              버전 (NEXT_PUBLIC_APP_VERSION)
            </div>
            <div className="text-lg text-gray-800 dark:text-white">
              {appVersion}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            API Secret Key (API_SECRET_KEY)
          </div>
          <div className="text-lg font-mono text-gray-800 dark:text-white break-all">
            {apiSecretKey}
          </div>
        </div>


        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>💡 참고:</strong> NEXT_PUBLIC_ 접두사가 있는 환경변수만 클라이언트에서
            접근 가능합니다. 비밀키나 서버 전용 변수는 NEXT_PUBLIC_ 접두사를 사용하지
            마세요.
          </div>
        </div>
      </div>
    </div>
  );
}

