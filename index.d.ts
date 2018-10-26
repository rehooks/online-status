export interface OnlineStatusOpts {
    onOnline?: () => void,
    onOffline?: () => void,
    onStatusChange?: (online: boolean) => void,
}

export default function useOnlineStatus(opts: OnlineStatusOpts): boolean;
