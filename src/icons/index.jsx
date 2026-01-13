import React from "react";
import MapPinSvg from "lucide-static/icons/map-pin.svg?react";
import ZoomInSvg from "lucide-static/icons/zoom-in.svg?react";
import PhoneSvg from "lucide-static/icons/phone.svg?react";
import MessageCircleSvg from "lucide-static/icons/message-circle.svg?react";
import MountainSvg from "lucide-static/icons/mountain.svg?react";
import StarSvg from "lucide-static/icons/star.svg?react";
import UsersSvg from "lucide-static/icons/users.svg?react";
import ShieldSvg from "lucide-static/icons/shield.svg?react";
import RouteSvg from "lucide-static/icons/route.svg?react";
import ZapSvg from "lucide-static/icons/zap.svg?react";
import CheckCircleSvg from "lucide-static/icons/check-circle-2.svg?react";

/**
 * Wraps SVG React components to accept size + className
 * ESLint-safe: Icon is used directly as a component
 */
function wrap(IconComponent) {
  function WrappedIcon({ size = 24, className = "" }) {
    return (
      <IconComponent
        width={size}
        height={size}
        className={className}
      />
    );
  }

  // Give React DevTools a readable name
  WrappedIcon.displayName =
    IconComponent.displayName || IconComponent.name || "Icon";

  return WrappedIcon;
}

export const MapPin = wrap(MapPinSvg);
export const ZoomIn = wrap(ZoomInSvg);
export const Phone = wrap(PhoneSvg);
export const MessageCircle = wrap(MessageCircleSvg);
export const Mountain = wrap(MountainSvg);
export const Star = wrap(StarSvg);
export const Users = wrap(UsersSvg);
export const Shield = wrap(ShieldSvg);
export const Route = wrap(RouteSvg);
export const Zap = wrap(ZapSvg);
export const CheckCircle2 = wrap(CheckCircleSvg);