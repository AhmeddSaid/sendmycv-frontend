export default function uuid(): string {
    return Buffer.from(crypto.randomUUID()).toString("base64");
}
