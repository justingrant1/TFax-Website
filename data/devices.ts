export interface Device {
  name: string
  slug: string
  brand: "Apple"
  type: "phone" | "tablet"
  releaseYear: number
  osVersion: string
  hasCamera: boolean
  hasLiDAR: boolean
  screenSize?: string
  primary_keyword: string
  secondary_keywords: string[]
  intro_variants: string[]
  cta_variants: string[]
  unique_features: string[]
  camera_tips: string
  file_picker_notes: string
  ios_version_notes?: string
}

export const devices: Device[] = [
  // ─── Generic parent pages ───────────────────────────────────────────────────
  {
    name: "iPhone",
    slug: "iphone",
    brand: "Apple",
    type: "phone",
    releaseYear: 2007,
    osVersion: "iOS 15+",
    hasCamera: true,
    hasLiDAR: false,
    primary_keyword: "how to fax from iphone",
    secondary_keywords: ["send fax from iphone", "iphone fax app", "fax on iphone", "mobile fax iphone"],
    intro_variants: [
      "Your iPhone can send a real fax in under two minutes — no fax machine, no landline required.",
      "Sending a fax from your iPhone is easier than you think, and TigerFax makes it completely free to start.",
      "Forget hunting down a fax machine. Your iPhone already has everything you need to send a professional fax.",
    ],
    cta_variants: ["Download TigerFax Free", "Send Your First Fax", "Start Free — No Credit Card"],
    unique_features: ["High-resolution camera scanning", "Files app integration", "iCloud document access"],
    camera_tips: "Use your iPhone's built-in camera to scan documents directly in TigerFax. Hold the phone steady about 12 inches above the document and let the auto-capture detect the edges.",
    file_picker_notes: "Tap the upload icon to access Files, Photos, iCloud Drive, or any connected cloud storage. TigerFax supports PDF, JPG, PNG, HEIC, and DOCX formats.",
  },
  {
    name: "iPad",
    slug: "ipad",
    brand: "Apple",
    type: "tablet",
    releaseYear: 2010,
    osVersion: "iPadOS 15+",
    hasCamera: true,
    hasLiDAR: false,
    primary_keyword: "how to fax from ipad",
    secondary_keywords: ["send fax from ipad", "ipad fax app", "fax on ipad", "fax from tablet"],
    intro_variants: [
      "Your iPad's large screen makes reviewing documents before faxing a breeze — and TigerFax is optimized for every iPad model.",
      "Faxing from an iPad gives you a desktop-like experience with the convenience of a mobile device.",
      "Whether you're using an iPad Pro or a basic iPad, TigerFax turns it into a powerful fax machine.",
    ],
    cta_variants: ["Download TigerFax for iPad", "Send a Fax from iPad", "Try Free on iPad"],
    unique_features: ["Large display for document review", "Split-screen multitasking", "Apple Pencil annotation support"],
    camera_tips: "The iPad's rear camera works great for scanning documents. For best results, use the iPad in landscape mode and ensure even lighting across the document.",
    file_picker_notes: "On iPad, you can use Split View to open Files or Photos alongside TigerFax, making it easy to drag and drop documents directly into the app.",
    ios_version_notes: "iPadOS 16+ supports Stage Manager, which lets you run TigerFax in a resizable window alongside other apps.",
  },

  // ─── iPhone 16 family ───────────────────────────────────────────────────────
  {
    name: "iPhone 16",
    slug: "iphone-16",
    brand: "Apple",
    type: "phone",
    releaseYear: 2024,
    osVersion: "iOS 18",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.1 inch",
    primary_keyword: "how to fax from iphone 16",
    secondary_keywords: ["send fax iphone 16", "iphone 16 fax app", "fax from ios 18", "iphone 16 fax"],
    intro_variants: [
      "The iPhone 16's 48MP camera captures document text with exceptional clarity, making it one of the best phones for scanning and faxing.",
      "With iOS 18 and TigerFax, your iPhone 16 can send a professional fax in under two minutes.",
      "Your iPhone 16 is more than a smartphone — with TigerFax installed, it's a portable fax machine that fits in your pocket.",
    ],
    cta_variants: ["Download TigerFax for iPhone 16", "Send Your First Fax Free", "Start Free on iPhone 16"],
    unique_features: ["48MP Fusion camera for ultra-sharp document scans", "A18 chip for instant processing", "Camera Control button for hands-free scanning"],
    camera_tips: "The iPhone 16's 48MP main camera captures document text at exceptional resolution. Use the Camera Control button on the side to trigger a scan hands-free — perfect when you need both hands to hold a document flat.",
    file_picker_notes: "iOS 18 on iPhone 16 supports enhanced Files app integration. You can import documents from iCloud Drive, Dropbox, Google Drive, or any connected storage directly into TigerFax.",
    ios_version_notes: "iOS 18 introduces improved document detection in the camera. TigerFax leverages this for automatic edge detection and perspective correction.",
  },
  {
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    brand: "Apple",
    type: "phone",
    releaseYear: 2024,
    osVersion: "iOS 18",
    hasCamera: true,
    hasLiDAR: true,
    screenSize: "6.3 inch",
    primary_keyword: "fax from iphone 16 pro",
    secondary_keywords: ["iphone 16 pro fax app", "send fax iphone 16 pro", "lidar fax scanning"],
    intro_variants: [
      "The iPhone 16 Pro's LiDAR scanner and 48MP ProRAW camera make it the most capable iPhone for document scanning and faxing.",
      "With LiDAR-assisted edge detection, the iPhone 16 Pro automatically frames your documents perfectly before faxing.",
      "iPhone 16 Pro users get the best scanning experience in TigerFax — LiDAR makes document edge detection instant and precise.",
    ],
    cta_variants: ["Download TigerFax for iPhone 16 Pro", "Scan & Fax with LiDAR", "Start Free"],
    unique_features: ["LiDAR scanner for instant document edge detection", "48MP ProRAW camera", "ProMotion 120Hz display for smooth document review"],
    camera_tips: "The iPhone 16 Pro's LiDAR scanner detects document edges in real time, even in low light. TigerFax uses this to automatically crop and straighten your scan before sending — no manual adjustment needed.",
    file_picker_notes: "The iPhone 16 Pro supports all standard iOS file formats. The ProRAW camera option is automatically converted to a fax-compatible format by TigerFax.",
    ios_version_notes: "iOS 18 on iPhone 16 Pro enables enhanced LiDAR document scanning with improved accuracy in mixed lighting conditions.",
  },
  {
    name: "iPhone 16 Plus",
    slug: "iphone-16-plus",
    brand: "Apple",
    type: "phone",
    releaseYear: 2024,
    osVersion: "iOS 18",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.7 inch",
    primary_keyword: "fax from iphone 16 plus",
    secondary_keywords: ["iphone 16 plus fax", "send fax iphone 16 plus"],
    intro_variants: [
      "The iPhone 16 Plus's large 6.7-inch display makes reviewing multi-page documents before faxing significantly easier.",
      "With its oversized screen and 48MP camera, the iPhone 16 Plus is excellent for scanning and faxing detailed documents.",
      "The iPhone 16 Plus combines a large display with a powerful camera — ideal for faxing contracts, forms, and multi-page documents.",
    ],
    cta_variants: ["Download TigerFax", "Send a Fax Free", "Start Free"],
    unique_features: ["6.7-inch Super Retina XDR display", "48MP camera", "All-day battery for extended use"],
    camera_tips: "The iPhone 16 Plus's large screen makes it easy to verify document quality before sending. Zoom in on the preview to check that all text is legible before tapping Send.",
    file_picker_notes: "The larger screen on iPhone 16 Plus makes navigating the Files app and selecting documents more comfortable, especially for multi-page documents.",
  },
  {
    name: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    brand: "Apple",
    type: "phone",
    releaseYear: 2024,
    osVersion: "iOS 18",
    hasCamera: true,
    hasLiDAR: true,
    screenSize: "6.9 inch",
    primary_keyword: "fax from iphone 16 pro max",
    secondary_keywords: ["iphone 16 pro max fax", "send fax iphone 16 pro max"],
    intro_variants: [
      "The iPhone 16 Pro Max is Apple's most powerful iPhone — and with TigerFax, it's also the most capable mobile fax device available.",
      "LiDAR scanning, a 48MP camera, and a 6.9-inch display make the iPhone 16 Pro Max exceptional for scanning and faxing documents.",
      "With the iPhone 16 Pro Max's professional camera system and TigerFax, sending a fax has never been faster or more accurate.",
    ],
    cta_variants: ["Download TigerFax", "Scan & Fax Free", "Start Free"],
    unique_features: ["LiDAR scanner", "48MP ProRAW camera", "6.9-inch display for detailed document review", "Titanium build"],
    camera_tips: "The iPhone 16 Pro Max's LiDAR scanner combined with its 48MP camera produces the sharpest document scans of any iPhone. For legal or medical documents where legibility is critical, this combination is unmatched.",
    file_picker_notes: "The 6.9-inch display makes the Files app feel almost like a tablet experience, making it easy to navigate and select documents for faxing.",
  },

  // ─── iPhone 15 family ───────────────────────────────────────────────────────
  {
    name: "iPhone 15",
    slug: "iphone-15",
    brand: "Apple",
    type: "phone",
    releaseYear: 2023,
    osVersion: "iOS 17+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.1 inch",
    primary_keyword: "how to fax from iphone 15",
    secondary_keywords: ["send fax iphone 15", "iphone 15 fax app", "fax from ios 17"],
    intro_variants: [
      "The iPhone 15 was the first standard iPhone to get a 48MP camera — making document scans sharp enough for any fax.",
      "With iOS 17 and TigerFax, your iPhone 15 can send a professional fax to any fax machine in the world.",
      "Your iPhone 15's USB-C port and 48MP camera make it a capable document scanning and faxing device.",
    ],
    cta_variants: ["Download TigerFax for iPhone 15", "Send a Fax Free", "Start Free"],
    unique_features: ["48MP main camera (first on standard iPhone)", "USB-C connectivity", "Dynamic Island"],
    camera_tips: "The iPhone 15's 48MP camera is a significant upgrade for document scanning. Text that was previously blurry on older iPhones is now crisp and legible, even on small-print documents like contracts.",
    file_picker_notes: "The iPhone 15's USB-C port allows you to connect external storage devices and import documents directly into TigerFax via the Files app.",
  },
  {
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    brand: "Apple",
    type: "phone",
    releaseYear: 2023,
    osVersion: "iOS 17+",
    hasCamera: true,
    hasLiDAR: true,
    screenSize: "6.1 inch",
    primary_keyword: "fax from iphone 15 pro",
    secondary_keywords: ["iphone 15 pro fax", "send fax iphone 15 pro"],
    intro_variants: [
      "The iPhone 15 Pro's LiDAR scanner makes document edge detection instant — TigerFax uses it to automatically frame your scans.",
      "With a titanium build and LiDAR scanner, the iPhone 15 Pro is built for professionals who need to fax on the go.",
      "iPhone 15 Pro users get LiDAR-assisted scanning in TigerFax, making it the fastest way to scan and fax a document.",
    ],
    cta_variants: ["Download TigerFax for iPhone 15 Pro", "Scan & Fax Free", "Start Free"],
    unique_features: ["LiDAR scanner", "48MP ProRAW camera", "Titanium design", "Action Button"],
    camera_tips: "You can configure the iPhone 15 Pro's Action Button to open TigerFax directly, making it even faster to start scanning a document when you need to fax something urgently.",
    file_picker_notes: "The iPhone 15 Pro supports USB 3 speeds via USB-C, allowing fast import of large multi-page PDF documents from external storage.",
  },

  // ─── iPhone 14 family ───────────────────────────────────────────────────────
  {
    name: "iPhone 14",
    slug: "iphone-14",
    brand: "Apple",
    type: "phone",
    releaseYear: 2022,
    osVersion: "iOS 16+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.1 inch",
    primary_keyword: "how to fax from iphone 14",
    secondary_keywords: ["send fax iphone 14", "iphone 14 fax app", "fax from ios 16"],
    intro_variants: [
      "The iPhone 14 runs iOS 16 and later, giving it full compatibility with TigerFax and all its document scanning features.",
      "Sending a fax from your iPhone 14 takes less than two minutes with TigerFax — no fax machine needed.",
      "Your iPhone 14's 12MP camera is more than capable of producing clear, legible document scans for faxing.",
    ],
    cta_variants: ["Download TigerFax for iPhone 14", "Send a Fax Free", "Start Free"],
    unique_features: ["12MP main camera with sensor-shift OIS", "Crash Detection", "Emergency SOS via satellite"],
    camera_tips: "The iPhone 14's sensor-shift optical image stabilization helps reduce blur when scanning documents in less-than-ideal lighting. Hold steady and let the OIS do the work.",
    file_picker_notes: "iOS 16 on iPhone 14 introduced an improved Files app with better cloud storage integration, making it easier to import documents from Google Drive, Dropbox, or OneDrive into TigerFax.",
  },
  {
    name: "iPhone 14 Pro",
    slug: "iphone-14-pro",
    brand: "Apple",
    type: "phone",
    releaseYear: 2022,
    osVersion: "iOS 16+",
    hasCamera: true,
    hasLiDAR: true,
    screenSize: "6.1 inch",
    primary_keyword: "fax from iphone 14 pro",
    secondary_keywords: ["iphone 14 pro fax", "send fax iphone 14 pro"],
    intro_variants: [
      "The iPhone 14 Pro introduced the 48MP camera to the Pro lineup — a major upgrade for document scanning quality.",
      "With LiDAR and a 48MP camera, the iPhone 14 Pro produces document scans that are sharp enough for even the most detail-heavy legal documents.",
      "iPhone 14 Pro users get the best of both worlds: LiDAR-assisted edge detection and 48MP resolution for crystal-clear fax scans.",
    ],
    cta_variants: ["Download TigerFax for iPhone 14 Pro", "Scan & Fax Free", "Start Free"],
    unique_features: ["48MP ProRAW camera (first on iPhone)", "LiDAR scanner", "Dynamic Island", "Always-On Display"],
    camera_tips: "The iPhone 14 Pro was the first iPhone to feature a 48MP camera. This means even small-print documents like prescription labels or fine-print contracts are captured with enough detail to be clearly legible when faxed.",
    file_picker_notes: "The Dynamic Island on iPhone 14 Pro can show TigerFax fax status updates while you're using other apps — you'll see when your fax is sent without switching back to the app.",
  },

  // ─── iPhone 13 ──────────────────────────────────────────────────────────────
  {
    name: "iPhone 13",
    slug: "iphone-13",
    brand: "Apple",
    type: "phone",
    releaseYear: 2021,
    osVersion: "iOS 15+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.1 inch",
    primary_keyword: "fax from iphone 13",
    secondary_keywords: ["iphone 13 fax app", "send fax iphone 13", "how to fax iphone 13"],
    intro_variants: [
      "The iPhone 13 is fully supported by TigerFax and can send faxes to any fax machine worldwide.",
      "With its improved 12MP dual-camera system, the iPhone 13 captures document scans with excellent clarity for faxing.",
      "Your iPhone 13 running iOS 15 or later has everything it needs to send professional faxes with TigerFax.",
    ],
    cta_variants: ["Download TigerFax for iPhone 13", "Send a Fax Free", "Start Free"],
    unique_features: ["12MP dual-camera with sensor-shift OIS on wide", "Cinematic mode", "A15 Bionic chip"],
    camera_tips: "The iPhone 13's sensor-shift OIS on the wide camera reduces camera shake during document scanning. For best results, scan in a well-lit area and let the auto-capture trigger automatically.",
    file_picker_notes: "iOS 15 on iPhone 13 supports Quick Note and improved Shortcuts integration, so you can create a shortcut to open TigerFax and start a fax directly from your home screen.",
  },

  // ─── iPhone 12 ──────────────────────────────────────────────────────────────
  {
    name: "iPhone 12",
    slug: "iphone-12",
    brand: "Apple",
    type: "phone",
    releaseYear: 2020,
    osVersion: "iOS 14+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "6.1 inch",
    primary_keyword: "fax from iphone 12",
    secondary_keywords: ["iphone 12 fax app", "send fax iphone 12"],
    intro_variants: [
      "The iPhone 12 is fully compatible with TigerFax and can send faxes worldwide — no fax machine required.",
      "With its 12MP dual-camera system and iOS 14+ support, the iPhone 12 handles document scanning and faxing with ease.",
      "Your iPhone 12 can send a fax in minutes using TigerFax — just scan, enter the number, and send.",
    ],
    cta_variants: ["Download TigerFax for iPhone 12", "Send a Fax Free", "Start Free"],
    unique_features: ["12MP dual-camera system", "5G connectivity", "MagSafe compatibility"],
    camera_tips: "The iPhone 12's Night mode can help when scanning documents in low-light environments. If the auto-capture doesn't trigger, tap the shutter button manually after positioning the document.",
    file_picker_notes: "iOS 14 on iPhone 12 introduced App Library and improved widget support. You can add a TigerFax widget to your home screen for quick access to your fax history.",
  },

  // ─── iPhone SE ──────────────────────────────────────────────────────────────
  {
    name: "iPhone SE",
    slug: "iphone-se",
    brand: "Apple",
    type: "phone",
    releaseYear: 2022,
    osVersion: "iOS 15+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "4.7 inch",
    primary_keyword: "fax from iphone se",
    secondary_keywords: ["iphone se fax app", "send fax iphone se", "iphone se 3rd gen fax"],
    intro_variants: [
      "The iPhone SE packs a powerful A15 chip into a compact 4.7-inch body — and TigerFax runs perfectly on it.",
      "Don't let the iPhone SE's small size fool you — it's fully capable of scanning and sending professional faxes with TigerFax.",
      "The iPhone SE (3rd generation) is one of the most affordable ways to get a capable mobile fax device.",
    ],
    cta_variants: ["Download TigerFax for iPhone SE", "Send a Fax Free", "Start Free"],
    unique_features: ["A15 Bionic chip", "Compact 4.7-inch design", "Touch ID home button"],
    camera_tips: "The iPhone SE's smaller screen means you'll want to zoom in on the document preview to verify legibility before sending. The 12MP camera is capable, but ensure good lighting for best results.",
    file_picker_notes: "Despite its compact size, the iPhone SE supports the full iOS Files app experience, giving you access to iCloud Drive, Dropbox, Google Drive, and other cloud storage for importing documents.",
  },

  // ─── iPad family ────────────────────────────────────────────────────────────
  {
    name: "iPad Pro",
    slug: "ipad-pro",
    brand: "Apple",
    type: "tablet",
    releaseYear: 2024,
    osVersion: "iPadOS 17+",
    hasCamera: true,
    hasLiDAR: true,
    screenSize: "11 or 13 inch",
    primary_keyword: "fax from ipad pro",
    secondary_keywords: ["ipad pro fax app", "send fax ipad pro", "fax from m4 ipad"],
    intro_variants: [
      "The iPad Pro's LiDAR scanner and M4 chip make it the most powerful tablet for document scanning and faxing.",
      "With a 13-inch display and LiDAR-assisted scanning, the iPad Pro gives you a desktop-like faxing experience.",
      "The iPad Pro running TigerFax is the ultimate mobile fax setup — large screen for document review, LiDAR for precise scanning.",
    ],
    cta_variants: ["Download TigerFax for iPad Pro", "Scan & Fax with LiDAR", "Start Free"],
    unique_features: ["LiDAR scanner", "M4 chip", "11 or 13-inch Liquid Retina XDR display", "Apple Pencil Pro support", "Stage Manager"],
    camera_tips: "The iPad Pro's LiDAR scanner makes document edge detection nearly instantaneous. For multi-page documents, TigerFax can automatically detect each page as you scan, making batch faxing faster than ever.",
    file_picker_notes: "Stage Manager on iPad Pro lets you run TigerFax in a resizable window alongside Files, Mail, or other apps. You can drag and drop documents directly from Files into TigerFax.",
    ios_version_notes: "iPadOS 17 on iPad Pro supports Apple Pencil hover detection, which can be used to annotate documents before faxing.",
  },
  {
    name: "iPad Air",
    slug: "ipad-air",
    brand: "Apple",
    type: "tablet",
    releaseYear: 2024,
    osVersion: "iPadOS 17+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "11 or 13 inch",
    primary_keyword: "fax from ipad air",
    secondary_keywords: ["ipad air fax app", "send fax ipad air", "fax from m2 ipad air"],
    intro_variants: [
      "The iPad Air strikes the perfect balance between performance and portability for mobile faxing.",
      "With an M2 chip and a choice of 11 or 13-inch displays, the iPad Air is a capable faxing device for professionals on the go.",
      "The iPad Air's large display and powerful chip make reviewing and sending multi-page faxes comfortable and efficient.",
    ],
    cta_variants: ["Download TigerFax for iPad Air", "Send a Fax Free", "Start Free"],
    unique_features: ["M2 chip", "11 or 13-inch Liquid Retina display", "Apple Pencil Pro support", "USB-C with USB 3 speeds"],
    camera_tips: "The iPad Air's 12MP rear camera produces clear document scans. For best results, use the landscape orientation and ensure the document is flat and well-lit.",
    file_picker_notes: "The iPad Air supports Split View, allowing you to open Files or Mail alongside TigerFax. Drag documents directly from Files into TigerFax to add them to your fax.",
  },
  {
    name: "iPad mini",
    slug: "ipad-mini",
    brand: "Apple",
    type: "tablet",
    releaseYear: 2021,
    osVersion: "iPadOS 15+",
    hasCamera: true,
    hasLiDAR: false,
    screenSize: "8.3 inch",
    primary_keyword: "fax from ipad mini",
    secondary_keywords: ["ipad mini fax app", "send fax ipad mini"],
    intro_variants: [
      "The iPad mini's compact 8.3-inch form factor makes it a portable faxing device that fits in a bag or large pocket.",
      "Don't underestimate the iPad mini — its A15 chip and 12MP camera make it fully capable of scanning and faxing documents.",
      "The iPad mini is the most portable iPad for faxing on the go, combining a usable screen size with a compact footprint.",
    ],
    cta_variants: ["Download TigerFax for iPad mini", "Send a Fax Free", "Start Free"],
    unique_features: ["A15 Bionic chip", "8.3-inch Liquid Retina display", "USB-C", "Apple Pencil (2nd gen) support"],
    camera_tips: "The iPad mini's 12MP rear camera is the same quality as the iPhone 13's. Hold it steady about 10 inches above the document for the best scan quality.",
    file_picker_notes: "The iPad mini supports the full iPadOS Files app. You can connect USB-C storage devices to import documents, or access iCloud Drive, Dropbox, and Google Drive.",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getDeviceBySlug(slug: string): Device | undefined {
  return devices.find((d) => d.slug === slug)
}

export function getDevicesByType(type: "phone" | "tablet"): Device[] {
  return devices.filter((d) => d.type === type)
}

export function getSiblingDevices(device: Device, count = 3): Device[] {
  return devices
    .filter((d) => d.slug !== device.slug && d.type === device.type)
    .slice(0, count)
}
