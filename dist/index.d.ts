export function spacing(text: string): string;

export function spacingFile(path: string, callback: (error: Error, data: string) => void): void;
export function spacingFile(path: string): Promise<string>;

export function spacingFileSync(path: string): string;

export function spacingText(text: string, callback: (error: Error, data: string) => void): void;
export function spacingTextSync(text: string): string;

export function spacingPage(): void;
export function spacingElementById(id: string): void;
export function spacingElementByClassName(className: string): void;
export function spacingElementByTagName(tagName: string): void;

export as namespace pangu;
