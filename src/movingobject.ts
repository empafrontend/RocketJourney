class MovingObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    protected speed: number;
    protected angle: number;
    protected animationTimeCounter: number;
    protected images: p5.Image[] = [];

    constructor(images: p5.Image[], x: number, y: number, width: number, height: number, speed: number, angle?: number) {
        this.images = images;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.angle = angle ?? 0;
        this.animationTimeCounter = 0;
    }

    public update() {
        this.animationTimeCounter += deltaTime;
    }

    public increaseSpeed() {
        this.speed += 1;
    }

    protected moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    protected moveDown() {
        this.y += this.speed;
        if (this.y > height - this.height) {
            this.y = height - this.height;
        }
    }

    protected moveToStart() {
        this.x += this.speed * .5;
        if (this.x > (width - this.width) / 3) {
            this.x = (width - this.width) / 3;
        }
    }

    public draw() {
    }
}