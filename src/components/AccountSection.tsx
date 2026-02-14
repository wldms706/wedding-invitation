import React, { useState } from 'react';
import { CoupleInfo } from '../types';
import { Wallet, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface AccountSectionProps {
  couple: CoupleInfo;
}

export const AccountSection: React.FC<AccountSectionProps> = ({ couple }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);

  const copyToClipboard = async (text: string, field: string) => {
    const accountNumber = text.replace(/[^0-9]/g, '');
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = accountNumber;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const AccountRow = ({ name, account, fieldKey }: { name: string; account: string; fieldKey: string }) => {
    if (!account) return null;
    return (
      <div className="flex items-center justify-between bg-white/80 rounded-md px-4 py-3">
        <div>
          <p className="text-[11px] text-[#6a9bc0] mb-1">{name}</p>
          <p className="text-sm text-[#3d5568] tracking-wider">{account}</p>
        </div>
        <button
          onClick={() => copyToClipboard(account, fieldKey)}
          className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#a5c8e4]/30 text-[11px] text-[#3d5f78] hover:bg-[#e8f4fd] transition-colors"
        >
          {copiedField === fieldKey ? (
            <>
              <Check size={12} className="text-green-500" />
              복사됨
            </>
          ) : (
            <>
              <Copy size={12} />
              복사
            </>
          )}
        </button>
      </div>
    );
  };

  const groomAccounts = [
    { name: couple.groomName, account: couple.groomAccount, key: 'groom' },
    { name: couple.groomFather, account: couple.groomFatherAccount, key: 'groomFather' },
    { name: couple.groomMother, account: couple.groomMotherAccount, key: 'groomMother' },
  ].filter(a => a.account);

  const brideAccounts = [
    { name: couple.brideName, account: couple.brideAccount, key: 'bride' },
    { name: couple.brideFather, account: couple.brideFatherAccount, key: 'brideFather' },
    { name: couple.brideMother, account: couple.brideMotherAccount, key: 'brideMother' },
  ].filter(a => a.account);

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[10px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
        Account
      </p>

      <div className="flex justify-center mb-6">
        <Wallet size={20} className="text-[#a5c8e4]" strokeWidth={1} />
      </div>

      <p className="text-lg tracking-[0.2em] text-[#2c3e50] font-light mb-3">
        마음 전하실 곳
      </p>

      <p className="text-xs text-[#6a9bc0] font-light mb-8 leading-relaxed">
        참석이 어려우신 분들을 위해<br />
        계좌번호를 안내드립니다
      </p>

      <div className="space-y-3">
        {/* 신랑측 */}
        {groomAccounts.length > 0 && (
          <div className="border border-[#a5c8e4]/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowGroom(!showGroom)}
              className="w-full flex items-center justify-between px-5 py-4 text-sm text-[#3d5f78] hover:bg-[#f0f8ff]/50 transition-colors"
            >
              <span className="tracking-wider">신랑측 계좌</span>
              {showGroom ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showGroom && (
              <div className="px-5 pb-4 space-y-2 animate-fade-in">
                {groomAccounts.map(a => (
                  <AccountRow key={a.key} name={a.name} account={a.account} fieldKey={a.key} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 신부측 */}
        {brideAccounts.length > 0 && (
          <div className="border border-[#a5c8e4]/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setShowBride(!showBride)}
              className="w-full flex items-center justify-between px-5 py-4 text-sm text-[#3d5f78] hover:bg-[#f0f8ff]/50 transition-colors"
            >
              <span className="tracking-wider">신부측 계좌</span>
              {showBride ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showBride && (
              <div className="px-5 pb-4 space-y-2 animate-fade-in">
                {brideAccounts.map(a => (
                  <AccountRow key={a.key} name={a.name} account={a.account} fieldKey={a.key} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
