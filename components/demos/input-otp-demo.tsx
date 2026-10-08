"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/new-york/ui/input-otp"
import { Label } from "@/registry/new-york/ui/label"

export default function InputOtpDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="otp">Verification code</Label>
      <InputOTP id="otp" maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        We sent a code to your email.
      </p>
    </div>
  )
}
