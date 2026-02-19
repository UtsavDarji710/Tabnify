export default function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {number}
            </div>
            <div className="text-gray-600 mt-1">{label}</div>
        </div>
    );
}
