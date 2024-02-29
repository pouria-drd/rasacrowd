import Badge from "./Badge"

interface TrackingStatusCardProps {
    type: "شرکت ها" | "ادارات" | "فردی";
}

const TrackingStatusCard = (props: TrackingStatusCardProps) => {

    const badgeColor: Record<string, 'green' | 'blue' | 'orange'> = {
        'شرکت ها': 'blue',
        'ادارات': 'orange',
        'فردی': 'green',
    };

    return (
        <div className="flex flex-col items-center justify-center
            p-4 w-full rounded-lg border border-gray-300">
            <div className="flex flex-row-reverse items-center justify-between w-full pb-4 pt-1 border-b border-gray-300">
                <div className="flex items-center justify-end gap-2 w-full">
                    <h3 className="text-base">
                        پرسشنامه {props.type}
                    </h3>

                    <Badge badgeColor={badgeColor[props.type]} />
                </div>

                <span className="bg-lime-100 text-xs text-lime-700 rounded-lg px-4 py-2 whitespace-nowrap">
                    تکمیل شده
                </span>
            </div>

            <div className="flex flex-row-reverse items-center gap-1 text-sm w-full pt-3">
                <p className="font-bold r2l">
                    وضعیت:
                </p>

                <p className="text-gray-600">
                    درحال بررسی
                </p>
            </div>
        </div>
    )
}

export default TrackingStatusCard
